package com.OliveiraGusta.NovaFilmes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OliveiraGusta.NovaFilmes.entities.Score;
import com.OliveiraGusta.NovaFilmes.entities.ScorePK;

public interface ScoreRepository extends JpaRepository <Score, ScorePK> {

	

}



