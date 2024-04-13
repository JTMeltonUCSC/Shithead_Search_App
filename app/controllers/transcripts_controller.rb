# app/controllers/transcripts_controller.rb
class TranscriptsController < ApplicationController
    def index
      if params[:query].present?
        @transcripts = Transcript.includes(:sound_file).where("text ILIKE ?", "%#{params[:query]}%")
      else
        @transcripts = Transcript.all
      end
  
      render json: @transcripts.map { |transcript|
        {
          id: transcript.id,
          text: transcript.text,
          sound_file: {
            file: url_for(transcript.sound_file.file)
          }
        }
      }
    end

    def search
        if params[:query].present?
          transcripts = Transcript.includes(:sound_file).where("text ILIKE ?", "%#{params[:query]}%")
          render json: transcripts.map { |transcript|
            {
              id: transcript.id,
              text: transcript.text,
              sound_file_url: rails_blob_path(transcript.sound_file.file, only_path: true)
            }
          }
        else
          render json: []
        end
      end
  end
  