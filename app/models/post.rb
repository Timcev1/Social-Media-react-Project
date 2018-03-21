class Post < ApplicationRecord
  validates :content, :title, presence: true
  validates :title, uniqueness: true

  def self.per_page
    3
  end

  def pages(per_page = self.per_page)
    pages = count / per_page.to_f
    pages += 1 if pages % 1 > 0
    pages.to_i
  end

  def self.paginate(page: 1, per_page: self.per_page)
    page = page.to_i
    per_page = per_page.to_i
    offset = (page - 1) * per_page
    limit(per_page).offset(offset)

  end
end
