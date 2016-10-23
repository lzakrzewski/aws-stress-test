<?php

declare(strict_types=1);

namespace Wall\Model;

use Ramsey\Uuid\UuidInterface;

final class Post
{
    /** @var UuidInterface */
    private $postId;

    /** @var string */
    private $content;

    /** @var \DateTime */
    private $at;

    public function __construct(UuidInterface $postId, $content, \DateTime $at)
    {
        $this->postId  = $postId;
        $this->content = $content;
        $this->at      = $at;
    }

    public static function publish(UuidInterface $postId, string $content, \DateTime $at): self
    {
        return new self($postId, $content, $at);
    }

    public function postId(): UuidInterface
    {
        return $this->postId;
    }

    public function content(): string
    {
        return $this->content;
    }

    public function at(): \DateTime
    {
        return $this->at;
    }
}
