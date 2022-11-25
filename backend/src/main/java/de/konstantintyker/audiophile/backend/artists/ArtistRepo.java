package de.konstantintyker.audiophile.backend.artists;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArtistRepo extends MongoRepository<Artist, String> {
}
