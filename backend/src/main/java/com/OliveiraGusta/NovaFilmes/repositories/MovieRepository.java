package com.OliveiraGusta.NovaFilmes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OliveiraGusta.NovaFilmes.entities.Movie;

public interface MovieRepository extends JpaRepository <Movie, Long> {

		
}
