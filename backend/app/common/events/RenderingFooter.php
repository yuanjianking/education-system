<?php

namespace app\common\events;

class RenderingFooter extends Event
{
    protected $contents;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(array &$contents)
    {
        // pass array by reference
        $this->contents = &$contents;
    }

    public function addContent($content)
    {
        if ($content) {
            if (!is_string($content)) {
                throw new \Exception("Can not add non-string content", 1);
            }

            $this->contents[] = $content;
        }
    }
}
