from graphene import ID, Boolean, Field, ObjectType, String

from app.graphene.query.user import User


class Message(ObjectType):
    id = ID()
    sender = Field(User)
    recipient = Field(User)
    content = String()
    send_date = String()
    received_date = String()
    is_read = Boolean()
