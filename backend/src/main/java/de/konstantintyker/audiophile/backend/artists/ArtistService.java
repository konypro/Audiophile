package de.konstantintyker.audiophile.backend.artists;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ArtistService {
    private final ArtistRepo artistRepo;
    private final ArtistUtils artistUtils;

    public List<Artist> getArtistList() {
        return this.artistRepo.findAll();
    }

    public ArtistService(ArtistRepo artistRepo, ArtistUtils artistUtils) {
        this.artistRepo = artistRepo;
        this.artistUtils = artistUtils;
    }

    public Artist addNewArtist(Artist newArtist) {
        String newUUID = artistUtils.generateUUID();
        Artist artist = new Artist(newUUID, newArtist.firstName(), newArtist.lastName(), newArtist.url());
        return this.artistRepo.save(artist);
    }

    public Artist updateArtistById(String id, Artist artist) {
        if (!artistRepo.existsById(id)) {
            throw new NoSuchElementException("No Artist was found with this id");
        }
        return artistRepo.save(artist);
    }

    public void deleteArtist(String id) {
        if (!artistRepo.existsById(id)) {
            throw new NoSuchElementException("No such element exception with this id");
        }
        artistRepo.deleteById(id);
    }
}
