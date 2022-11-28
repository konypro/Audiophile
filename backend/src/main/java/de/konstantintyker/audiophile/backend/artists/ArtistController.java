package de.konstantintyker.audiophile.backend.artists;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/artists")
public class ArtistController {

    private final ArtistService artistService;

    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping
    List<Artist> getArtistList() {
        return artistService.getArtistList();
    }

    @PostMapping
    public Artist addNewArtist(@Valid @RequestBody NewArtist artist) {
        return artistService.addNewArtist(artist);
    }


}