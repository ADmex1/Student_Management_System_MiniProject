<?php

namespace App\Http\Resources;

use App\Http\Resources\ClassResource;
use App\Http\Resources\SectionResource;
use App\Models\Student;
use App\Http\Resources\StudentResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return [
            'id' => $this->id,
            'section_name' => $this->section_name,
            'class_id' => $this->class_id,
            'class' => new ClassResource($this->whenLoaded('class')),
            'students' => StudentResource::collection($this->whenLoaded('students')),
        ];
    }
}
