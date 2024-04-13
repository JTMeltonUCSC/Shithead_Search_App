class SoundFile < ApplicationRecord
    has_one_attached :file
    has_many :transcripts, dependent: :destroy
  end
