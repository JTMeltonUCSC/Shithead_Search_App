class CreateAudioFiles < ActiveRecord::Migration[7.1]
  def change
    create_table :audio_files do |t|
      # Add fields you need for the audio file metadata
      t.string :title
      t.integer :duration # duration in seconds
      t.timestamps
    end
  end
end
