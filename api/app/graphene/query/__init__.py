import graphene
from app.database.repositories.user_repository import UserRepository
from app.graphene.query.account import SocialAccount
from app.graphene.query.message import Message
from app.graphene.query.user import User
from graphene import ID, Field, List, ObjectType, String


class Query(ObjectType):
    me = Field(User)
    user = Field(User, user_id=String(required=True))
    message = Field(Message, id=ID(required=True))
    messages = List(Message)
    account = Field(SocialAccount, id=ID(required=True))
    # accounts_by_user_id = List(
    #     SocialAccount,
    #     user_id=ID(required=True),
    #     resolver=SocialAccount.resolve_accounts_by_user_id,
    # )
    goodbye = String()

    def resolve_me(root, info):
        return User(id=1)

    def resolve_user(root, info, user_id):
        user_repo = UserRepository()
        user_model = user_repo.get_user(user_id)
        obj = {
            "id": user_model.id,
            "username": user_model.name,
            "email": user_model.email,
            "icon": user_model.icon,
            "accounts": [],
        }
        user = User(**obj)
        return user


class CreateUser(graphene.Mutation):
    class Arguments:
        username = String(required=True)
        email = String(required=True)
        password = String(required=True)

    user = Field(lambda: User)

    def mutate(self, info, username, email, password):
        pass
        # return db.create_user(username, email, password)


class Mutation(graphene.ObjectType):
    pass


schema = graphene.Schema(
    query=Query,
)
