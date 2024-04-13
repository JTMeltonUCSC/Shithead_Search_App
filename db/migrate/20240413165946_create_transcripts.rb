class CreateTranscripts < ActiveRecord::Migration[7.1]
  def change
    create_table :transcripts do |t|
      t.integer :clip_start
      t.integer :clip_end
      t.text :text
      t.references :audio_file, null: false, foreign_key: true
      t.timestamps
    end
  end
end
