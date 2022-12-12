package de.konstantintyker.audiophile.backend.artist;

import de.konstantintyker.audiophile.backend.artists.Artist;
import de.konstantintyker.audiophile.backend.artists.ArtistRepo;
import de.konstantintyker.audiophile.backend.artists.ArtistService;
import de.konstantintyker.audiophile.backend.artists.ArtistUtils;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ArtistServiceTest {
    ArtistRepo artistRepo = mock(ArtistRepo.class);
    ArtistUtils artistUtils = mock(ArtistUtils.class);
    ArtistService artistService = new ArtistService(artistRepo, artistUtils);

    @Test
    void GetArtistsTest() {
        Artist artist = new Artist("123", "Elton", "John", "www.eltonjohn.com");
        List<Artist> artists = List.of(artist);
        when(artistRepo.findAll()).thenReturn(artists);
        List<Artist> actual = artistService.getArtistList();
        assertEquals(artists, actual);
    }

    @Test
    void AddNewArtistWithId() {
        Artist artist = new Artist("123", "Elton", "John", "www.eltonjohn.com");
        when(artistRepo.save(artist)).thenReturn(artist);
        when(artistUtils.generateUUID()).thenReturn("123");

        Artist result = artistService.addNewArtist(artist);
        verify(artistRepo).save(artist);
        assertEquals(artist, result);
    }

    @Test
    void updateArtistById() {


        Artist updatedArtist = new Artist("123", "Elton", "John", "www.eltonjohn.com");

        when(artistRepo.existsById("123")).thenReturn(true);
        when(artistRepo.save(updatedArtist)).thenReturn(updatedArtist);
        Artist actual = artistService.updateArtistById("123", updatedArtist);

        assertEquals(updatedArtist, actual);
    }


}
