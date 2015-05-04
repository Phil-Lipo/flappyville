package flappyville;

import java.util.ArrayList;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.users.User;

@PersistenceCapable(identityType=IdentityType.APPLICATION)
public class Users{
	
@PrimaryKey
@Persistent(valueStrategy=IdGeneratorStrategy.IDENTITY)
Long id;
@Persistent
User user;
@Persistent
ArrayList<Long> inscriptions = new ArrayList<>();

public Users(User user) {
this.user = user;
}

public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public ArrayList<Long> getInscriptions() {
	return inscriptions;
}
public void setInscriptions(ArrayList<Long> inscriptions) {
	this.inscriptions = inscriptions;
}


}