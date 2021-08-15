<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Entity\Statistics;
use App\Entity\Teachr;
use App\Repository\StatisticsRepository;
use Doctrine\ORM\EntityManagerInterface;

class PostPersister implements DataPersisterInterface
{
    protected $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    public function supports($data): bool
    {
        return $data instanceof Teachr;
    }

    public function persist($data)
    {
        $data->setCreatedAt(new \DateTime());

        $this->em->persist($data);
        $this->em->flush();

        if ($this->em->find(Statistics::class, 1) == null) {
            $stats = new Statistics(0);

            $stats->setCompteur($stats->getCompteur() + 1);

            $this->em->persist($stats);
            $this->em->flush();
        } else {
            $stats = $this->em->find(Statistics::class, 1);

            $stats->setCompteur($stats->getCompteur() + 1);

            $this->em->persist($stats);
            $this->em->flush();
        }
    }

    public function remove($data)
    {
        $this->em->remove($data);
        $this->em->flush();
    }
}
