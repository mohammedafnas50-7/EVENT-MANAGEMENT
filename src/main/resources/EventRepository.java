package com.example.eventmanagement.repository;

import com.example.eventmanagement.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EventRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private RowMapper<Event> rowMapper = (rs, rowNum) -> new Event(
        rs.getInt("id"),
        rs.getString("name"),
        rs.getString("location"),
        rs.getString("date")
    );

    public List<Event> findAll() {
        return jdbcTemplate.query("SELECT * FROM event", rowMapper);
    }

    public int save(Event event) {
        return jdbcTemplate.update(
            "INSERT INTO event (name, location, date) VALUES (?, ?, ?)",
            event.getName(), event.getLocation(), event.getDate()
        );
    }
}
