package de.konstantintyker.audiophile.backend.artists;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ArtistUtils {

    public String generateUUID() {
        return UUID.randomUUID().toString();
    }

}
