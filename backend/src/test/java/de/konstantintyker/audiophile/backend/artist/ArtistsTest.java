package de.konstantintyker.audiophile.backend.artist;

import de.konstantintyker.audiophile.backend.artists.Artist;
import de.konstantintyker.audiophile.backend.artists.ArtistRepo;
import de.konstantintyker.audiophile.backend.artists.ArtistService;
import de.konstantintyker.audiophile.backend.artists.ArtistUtils;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TravelerServiceTest {
    ArtistRepo artistRepo = mock(ArtistRepo.class);
    ArtistUtils artistUtils = mock(ArtistUtils.class);
    ArtistService artistService = new ArtistService(artistRepo, artistUtils);

    @Test
    void GetArtistsTest() {
        Artist artist = new Artist("123", "Elton", "John");
        List<Artist> artists = List.of(artist);

        when(artistRepo.findAll()).thenReturn(artists);
        List<Artist> actual = artistService.getArtistList();
        Assertions.assertEquals(artists, actual);
    }


}
