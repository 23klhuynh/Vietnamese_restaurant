from app import db
from uuid import uuid4


class MenuItem(db.Model):
    __tablename__="menu_item"
    id = db.Column(db.Integer, primary_key=True, default=str(uuid4))
    name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f"<MenuItem {self.name}>"
    
    def to_dic(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "category": self.category
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()