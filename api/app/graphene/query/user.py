from graphene import ID, List, ObjectType, String

from app.graphene.query.account import ConnectAccount


class User(ObjectType):
    id = ID()
    username = String()
    email = String()
    icon = String()
    accounts = List(lambda: ConnectAccount)
