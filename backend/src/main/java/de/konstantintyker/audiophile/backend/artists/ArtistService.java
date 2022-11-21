package de.konstantintyker.audiophile.backend.artists;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {
    private final ArtistRepo artistRepo;
    private final ArtistUtils artistUtils;
    public List<Artist> getArtistList(){
        return this.artistRepo.findAll();
    }


    public ArtistService(ArtistRepo artistRepo, ArtistUtils artistUtils) {
        this.artistRepo = artistRepo;
        this.artistUtils = artistUtils;
    }

    public Artist addArtistDate(NewArtist newArtist) {
        String uuid = this.artistUtils.generateUUID();
        Artist artist = new Artist(newArtist.firstName(),newArtist.lastName(),uuid);
        return this.artistRepo.save(artist);
    }
}
