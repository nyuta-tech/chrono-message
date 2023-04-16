from graphene import ID, List, Field, ObjectType

from app.graphene.query.user import User
from app.graphene.query.message import Message
from app.graphene.query.account import ConnectAccount


class Query(ObjectType):
    me = Field(User)
    user = Field(User, id=ID(required=True))
    message = Field(Message, id=ID(required=True))
    messages = List(Message)
    account = Field(ConnectAccount, id=ID(required=True))
    accounts_by_user_id = List(
        ConnectAccount,
        user_id=ID(required=True),
        resolver=ConnectAccount.resolve_accounts_by_user_id,
    )
