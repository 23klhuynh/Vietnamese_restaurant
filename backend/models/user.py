from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from uuid import uuid4
from datetime import datetime

#database structure
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True, default=str(uuid4))
    username = db.column(db.String, nullable=False)
    email = db.column(db.String, nullable=False)
    password = db.column(db.text)

    def __repr__(self):
        return f"<User {self.username}>"
    
    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    @classmethod
    def get_user_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    def save(self):
        try:
            db.session.add(self)
            db.session.commit()
        except Exception as e:
            db.session.rollback()  
            raise e

    def delete(self):
        try:
            db.session.delete(self)
            db.session.commit()
        except Exception as e:
            db.session.rollback()  
            raise e
    
#logout
class TokenBlocklist(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    jti = db.Column(db.String(), nullable=False) #IMPORTANT use uuid if use postquesql
    create_at = db.Column(db.DateTime(), default=datetime.utcnow)
    expires_at = db.Column(db.DataTime(), nullable=False)

    def __repr__(self):
        return f"<Token {self.jti}>"

    def save(self):
        try:
            db.session.add(self)
            db.session.commit()
        except Exception as e:
            db.session.rollback()  
            raise e

    @classmethod
    def remove_expired(cls):
        #delete tokens that have been expired
        now = datetime.utcnow()
        cls.query.filter(cls.expires_at < now).delete()
        db.session.commit()






    

    

