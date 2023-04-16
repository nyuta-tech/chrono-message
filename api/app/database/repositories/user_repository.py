from app.database.client import DB, get_db_client
from app.database.models import User


class UserRepository:
    def __init__(self, db_client: DB = None):
        if not db_client:
            db_client = get_db_client()
        self.db_client = db_client

    def get_user(self, user_id: str) -> User:
        query = """
            SELECT
              id,
              user_id,
              email,
              name,
              icon
            FROM
              users
            WHERE user_id = %s
        """
        row = self.db_client.select_one(query, (user_id,))
        return User(id=row[0], user_id=row[1], email=row[2], name=row[3], icon=row[4])
