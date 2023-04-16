import configparser
from typing import Tuple

import psycopg2

# db config
config_db = configparser.ConfigParser()
config_db.read("./config.ini")
host = config_db["DB"]["host"]
port = config_db["DB"]["port"]
dbname = config_db["DB"]["dbname"]
user = config_db["DB"]["user"]
password = config_db["DB"]["password"]

DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{dbname}"


class DB:
    def __init__(self, conn) -> None:
        self.conn = conn

    def execute(self, query: str, args: Tuple = tuple(), commit=False):
        retry = 0
        while retry < 3:
            with self.conn.cursor() as cursor:
                try:
                    cursor.execute(query, args=args)
                    if commit:
                        self.commit()
                    return True
                except Exception:
                    retry += 1
                    self.conn = psycopg2.connect(DATABASE_URL)
                    continue
        raise Exception

    def select_one(self, query: str, key: Tuple):
        with self.conn.cursor() as cursor:
            try:
                cursor.execute(query, key)
                row = cursor.fetchone()
                return row
            except BaseException as e:
                raise e

    def select_all(self, query: str, key: str = ""):
        with self.conn.cursor() as cursor:
            try:
                if key:
                    cursor.execute(query, key)
                else:
                    cursor.execute(query)
                rows = cursor.fetchall()
                return rows
            except BaseException as e:
                raise e

    def commit(self):
        self.conn.commit()

    def __del__(self):
        self.conn.close()


def get_db_client():
    conn = psycopg2.connect(DATABASE_URL)
    db_client = DB(conn)
    return db_client
