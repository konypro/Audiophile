package de.konstantintyker.audiophile.backend.artists;

import javax.validation.constraints.NotBlank;

public record NewArtist(
        @NotBlank
        String firstName,
        @NotBlank
        String lastName
) {
}
