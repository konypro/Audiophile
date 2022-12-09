package de.konstantintyker.audiophile.backend.artist;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.konstantintyker.audiophile.backend.artists.Artist;
import de.konstantintyker.audiophile.backend.artists.ArtistService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ArtistIntegrationTest {
    @Autowired
    private MockMvc mvc;
    @Autowired
    private ArtistService testService;
    @Autowired
    private ObjectMapper objectMapper;


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
    void deleteArtistByIdIsNotFound() throws Exception {
        mvc.perform(MockMvcRequestBuilders.delete("/api/artists/123"))
                .andExpect(status().isNotFound());
    }

    @Test
    @DirtiesContext
    void deleteArtistWithExistId() throws Exception {
        Artist savedArtist = testService.addNewArtist(new Artist("123", "Elton", "John"));
        String id = savedArtist.id();
        mvc.perform(MockMvcRequestBuilders.delete("/api/artists/" + id))
                .andExpect(status().isNoContent());
    }

    @Test
    @DirtiesContext
    void updateNewArtist() throws Exception {
        Artist updateArtist = testService.addNewArtist(new Artist("", "Elton", "John"));
        Artist newArtist = (new Artist(updateArtist.id(), "Ana", "John"));

        String jsonNewData = """
                {
                "id": "$",
                "firstName": "Ana",
                "lastName" : "John"
                }
                """.replace("$", updateArtist.id());

        String content = mvc.perform(MockMvcRequestBuilders.put("/api/artists/" + updateArtist.id())
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(jsonNewData))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();

        Artist responseArtist = objectMapper.readValue(content, Artist.class);

        assertEquals(newArtist.firstName(), responseArtist.firstName());
    }

    @Test
    @DirtiesContext
    void updateNewArtistNotAllowed() throws Exception {
        String jsonNewData = """
                {
                "id": "$",
                "firstName": "Ana",
                "lastName" : "John"
                }
                """;

        mvc.perform(MockMvcRequestBuilders.put("/api/artists/123")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(jsonNewData))
                .andExpect(status().isBadRequest());

    }

    @Test
    @DirtiesContext
    void updateNewArtistNotFound() throws Exception {
        String jsonNewData = """
                {
                "id": "123",
                "firstName": "Ana",
                "lastName" : "John"
                }
                """;

        mvc.perform(MockMvcRequestBuilders.put("/api/artists/123")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(jsonNewData))
                .andExpect(status().isNotFound());

    }


}

