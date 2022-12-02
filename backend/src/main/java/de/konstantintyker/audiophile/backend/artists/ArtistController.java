package de.konstantintyker.audiophile.backend.artists;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.NoSuchElementException;

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
    public Artist addNewArtist(@Valid @RequestBody Artist artist) {
        return artistService.addNewArtist(artist);
    }

    @PutMapping("/{id}")
    public Artist updateArtist(@PathVariable String id, @RequestBody Artist artist) {
        try {
            if (artist.id().equals(id)) {
                return artistService.updateArtistById(id, artist);
            }
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        } catch (NoSuchElementException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}
