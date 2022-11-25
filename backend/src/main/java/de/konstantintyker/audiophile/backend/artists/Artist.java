package de.konstantintyker.audiophile.backend.artists;


import org.springframework.data.annotation.Id;

public record Artist(
        @Id
        String id,
        String firstName,
        String lastName
) {
}
