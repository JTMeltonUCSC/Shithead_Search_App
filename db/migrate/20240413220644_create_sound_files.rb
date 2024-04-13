class CreateSoundFiles < ActiveRecord::Migration[7.1]
  def change
    create_table :sound_files do |t|
      t.string :title
      t.string :file

      t.timestamps
    end
  end
end
