class Post < ApplicationRecord
  validates :content, :title, presence: true
  validates :title, uniqueness: true
  has_one :like

  def self.per_page
    3
  end

  def self.paginate(page: 1, per_page: self.per_page)
    page = page.to_i
    per_page = per_page.to_i
    offset = (page - 1) * per_page
    limit(per_page).offset(offset)
  end

  def self.totalPages
    posts = Post.all
    lengthOf = posts.count
    dividedPosts = lengthOf.to_i / 3
    totalP = (dividedPosts.to_f).ceil
    return totalP
  end
end
