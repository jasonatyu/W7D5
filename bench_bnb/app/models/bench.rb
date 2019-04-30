class Bench < ApplicationRecord

    def self.in_bounds(bounds)
        Bench.where(lat: bounds["southWest"]["lat"]...bounds["northEast"]["lat"])
        .where(lng: bounds["southWest"]["lng"]...bounds["northEast"]["lng"])
    end


end
