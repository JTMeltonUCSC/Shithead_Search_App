class SoundFilesController < ApplicationController
  def new
    @sound_file = SoundFile.new
  end

  def index
    @sound_files = SoundFile.all  # Fetches all sound files from the database
  end

  def show
    @sound_file = SoundFile.find(params[:id])
  end

  def create
    @sound_file = SoundFile.new(sound_file_params)
    if @sound_file.save
      redirect_to sound_files_path, notice: 'File was successfully uploaded.'
    else
      render :new
    end
  end

  private

  def sound_file_params
    params.require(:sound_file).permit(:title, :file)
  end
end
