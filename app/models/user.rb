class User < ApplicationRecord
  validates :username, :password, presence: true
  validates :username, uniqueness: true

  has_many :posts
end
