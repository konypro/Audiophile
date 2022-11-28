package de.konstantintyker.audiophile.backend.artists;
import java.util.UUID;
public class ArtistUtils {
    private ArtistUtils() {
    }
    public static String generateUUID() {
        return UUID.randomUUID().toString();
    }

}
