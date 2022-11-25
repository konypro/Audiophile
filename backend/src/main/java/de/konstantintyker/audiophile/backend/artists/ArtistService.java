package de.konstantintyker.audiophile.backend.artists;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {
    private final ArtistRepo artistRepo;
    public List<Artist> getArtistList(){
        return this.artistRepo.findAll();
    }

    public ArtistService(ArtistRepo artistRepo) {
        this.artistRepo = artistRepo;
    }

}
