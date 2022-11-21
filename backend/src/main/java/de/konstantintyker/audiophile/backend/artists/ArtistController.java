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

    @PostMapping
    Artist addArtist(@RequestBody @Valid NewArtist artist){
        return artistService.addArtistDate(artist);
    }
    @GetMapping
    List<Artist> getArtistList(){
        return artistService.getArtistList();
    }

}
