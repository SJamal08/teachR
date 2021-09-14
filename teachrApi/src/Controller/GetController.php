<?php

namespace App\Controller;

use App\Repository\TeachrRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class GetController extends AbstractController
{
    #[Route('/teachr/getReverse', name: 'get')]
    public function index(TeachrRepository $teachrRepo, SerializerInterface $serializer): Response
    {

        $contents = $teachrRepo->findAll();

        $reverse = $serializer->serialize(array_reverse($contents), 'json');

        $response = new Response($reverse, 200, [
            "Content-Type" => "application/json"
        ]);

        return $response;
    }
}
