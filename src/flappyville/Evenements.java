package flappyville;


import java.util.ArrayList;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

@PersistenceCapable(identityType=IdentityType.APPLICATION)
public class Evenements {
	
		@PrimaryKey
		@Persistent(valueStrategy=IdGeneratorStrategy.IDENTITY)
		Long id;
		@Persistent
		String titre;
		@Persistent
		String adresse;
		@Persistent
		String ville;
		@Persistent
		String heure;
		@Persistent
		String date;
		@Persistent
		ArrayList<String> inscriptions = new ArrayList<>();
		public ArrayList<String> getInscriptions() {
			return inscriptions;
		}
		public void setInscriptions(ArrayList<String> inscriptions) {
			this.inscriptions = inscriptions;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getTitre() {
			return titre;
		}
		public void setTitre(String titre) {
			this.titre = titre;
		}
		public String getAdresse() {
			return adresse;
		}
		public void setAdresse(String adresse) {
			this.adresse = adresse;
		}
		public String getVille() {
			return ville;
		}
		public void setVille(String ville) {
			this.ville = ville;
		}
		public String getHeure() {
			return heure;
		}
		public void setHeure(String heure) {
			this.heure = heure;
		}
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public int getNBPlayers() {
			return NBPlayers;
		}
		public void setNBPlayers(int nBPlayers) {
			NBPlayers = nBPlayers;
		}
		@Persistent
		int NBPlayers;
		
		
		
	
}
