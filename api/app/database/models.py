from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class User(BaseModel):
    id: int
    user_id: str
    email: str
    name: str
    icon: str


class Friend(BaseModel):
    id: int
    user_id: str
    friend_id: str


class SocialAccountBase(BaseModel):
    user_id: str
    site_name: str


class SocialAccountCreate(SocialAccountBase):
    access_token: str


class SocialAccount(SocialAccountBase):
    id: int

    class Config:
        orm_mode = True


class MessageBase(BaseModel):
    id: int
    sender_id: str
    recipient_id: str
    content: str
    send_date: Optional[datetime]
    received_date: Optional[datetime]
    scheduled_date: Optional[datetime]
    is_read: Optional[bool]
    sent_via: Optional[str]
