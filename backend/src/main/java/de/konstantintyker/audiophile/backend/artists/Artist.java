package de.konstantintyker.audiophile.backend.artists;


import lombok.With;
import org.springframework.data.annotation.Id;

@With
public record Artist(
        @Id
        String id,
        String firstName,
        String lastName
) {
}
