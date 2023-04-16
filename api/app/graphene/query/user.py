from app.graphene.query.account import SocialAccount
from graphene import ID, List, ObjectType, String


class User(ObjectType):
    id = ID()
    username = String()
    email = String()
    icon = String()
    accounts = List(lambda: SocialAccount)
