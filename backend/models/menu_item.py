#NOT NEEDED IN PROJECT

from extensions import db
from uuid import uuid4
from sqlalchemy.dialects.postgresql import UUID

class MenuItem(db.Model):
    __tablename__="menu_item"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    category = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f"<MenuItem {self.name}>"
    
    def to_dic(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": str(self.price),
            "category": self.category
        }
    
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