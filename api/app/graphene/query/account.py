from graphene import ID, ObjectType, String


class SocialAccount(ObjectType):
    id = ID()
    user_id = ID()
    site_name = String()
    key = String()
