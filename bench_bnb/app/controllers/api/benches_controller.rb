class Api::BenchesController < ApplicationController
    def index 
        max_seating = params[:filters][:maxSeating] || Float::INFINITY 
        min_seating = params[:filters][:minSeating] || 0 
        @benches = Bench.in_bounds(params[:filters][:bounds]).where(seating: min_seating...max_seating)
    end

    def create 
        @bench = Bench.new(bench_params)
        if @bench.save 
            render json: @bench 
        else 
            render json: @bench.errors.full_messages, status: 422
        end
    end

    private 
    def bench_params
        params.require(:bench).permit(:description, :seating, :lat, :lng, :maxSeating, :minSeating)
    end
end
