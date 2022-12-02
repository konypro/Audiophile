package de.konstantintyker.audiophile.backend.artist;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.konstantintyker.audiophile.backend.artists.Artist;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ArtistIntegrationTest {
    @Autowired
    private MockMvc mvc;


    @Test
    void WhenGetArtistsIsOk() throws Exception {

        mvc.perform(MockMvcRequestBuilders.get("/api/artists"))

                .andExpect(status().isOk())
                .andExpect(content().json("[]"));

    }

    @Test
    @DirtiesContext
    void WhenAddArtist_Expect200() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/api/artists")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {    "firstName": "Elton","lastName": "John" }
                                """))
                .andExpect(status().isOk());
    }

    @Test
    @DirtiesContext
    void deleteTravelerByIdIsSuccessful() throws Exception {

        ObjectMapper objectMapper = new ObjectMapper();

        String body = mvc.perform(MockMvcRequestBuilders.post("/api/artists")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"firstName": "Elton","lastName": "John"}
                                """))
                .andExpect(status().isCreated())
                .andReturn().getResponse().getContentAsString();

        Artist artist = objectMapper.readValue(body, Artist.class);

        mvc
                .perform(MockMvcRequestBuilders.delete("/api/artists/" + artist.id()))
                .andExpect(status().isNoContent());
    }
}


