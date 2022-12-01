package de.konstantintyker.audiophile.backend.artists;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PutMapping("/{id}")
    public ResponseEntity<Artist> updateArtist(@PathVariable String id, @Valid @RequestBody Artist artist) {
        boolean artistExist = artistService.isArtistExist(id);

        Artist artistToUpdate = artist.id(id)
        Artist updateArtist = artistService.addNewArtist(artistToUpdate);

        return artistExist ?
                new ResponseEntity<>(updateArtist, HttpStatus.OK) :
                new ResponseEntity<>(updateArtist, HttpStatus.CREATED);
    }


}
