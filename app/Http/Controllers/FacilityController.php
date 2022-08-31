<?php

namespace App\Http\Controllers;

use App\Http\Resources\FacilityResource;
use App\Http\Requests\StoreFacilityRequest;
use App\Http\Requests\UpdateFacilityRequest;
use App\Models\Facility;
use App\Repositories\RoomRepository;
use App\Traits\Controller\CommonTrait;
use Symfony\Component\HttpFoundation\Response;

class FacilityController extends Controller
{
    use CommonTrait;

    public function __construct(RoomRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return FacilityResource::collection(
            $this->repository->all()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFacilityRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFacilityRequest $request)
    {
        $this->repository->create($request->all());

        return \response('', Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Facility  $facility
     * @return FacilityResource
     */
    public function show(Facility $facility)
    {
        return new FacilityResource($facility);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFacilityRequest  $request
     * @param  \App\Models\Facility  $facility
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFacilityRequest $request, Facility $facility)
    {
        $this->repository->update($facility, $request->all());

        return \response('', Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Facility  $facility
     * @return \Illuminate\Http\Response
     */
    public function destroy(Facility $facility)
    {
        $this->repository->destroy($facility);

        return \response('', Response::HTTP_OK);
    }
}
