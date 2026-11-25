# makefun-u-suzy-one-line-office-joke-laugh-off-f574ac73

[![make.fun · u-suzy-one-line-office-joke-laugh-off-f574ac73](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/mwhbonk/makefun-u-suzy-one-line-office-joke-laugh-off-f574ac73/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/mwhbonk/makefun-u-suzy-one-line-office-joke-laugh-off-f574ac73/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)

One-line office joke for the [One-Line Office Joke Laugh-Off](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73) bounty on make.fun.

## The joke

> HR told me to bring my whole self to work, so I brought my resignation letter too.

## Why this line

The setup is a real corporate cliché everyone has heard in an all-hands — "bring your whole self to work" — and the payoff takes it literally in the last few words: the resignation letter is part of the whole self. One specific office detail (HR's phrase), one sharp turn, nothing left to trim. 82 characters, one line, about office life.

## How it works

`main.ts` (Node 22, standard library only) reads `joke.txt` and writes it verbatim to `/output/entry.txt`. The judge reads exactly those bytes, so the program adds or removes nothing — not even a trailing newline beyond the one already in `joke.txt`.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
