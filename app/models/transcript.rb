class Transcript < ApplicationRecord
    belongs_to :sound_file_id
  
    # Ensure timestamps are integers or appropriate format to store seconds
    validates :clip_start, :clip_end, presence: true, numericality: { only_integer: true }
    validates :text, presence: true

    def self.search(query)
        where("text ILIKE ?", "%#{query}%")
    end
  end
