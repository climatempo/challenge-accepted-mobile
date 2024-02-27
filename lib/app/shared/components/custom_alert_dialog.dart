import 'package:flutter/material.dart';

class CustomAletDialog extends StatelessWidget {
  final String title;
  final Widget? content;
  final String titleBt1;
  final String titleBt2;
  final Function functionBt1;
  final Function functionBt2;

  const CustomAletDialog({
    super.key,
    required this.title,
    this.content,
    required this.titleBt1,
    required this.titleBt2,
    required this.functionBt1,
    required this.functionBt2,
  });

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      surfaceTintColor: Theme.of(context).colorScheme.background,
      title: Text(
        title,
        style: Theme.of(context).textTheme.titleLarge,
        textAlign: TextAlign.center,
      ),
      content: content,
      actions: [
        TextButton(
          style: TextButton.styleFrom(
            foregroundColor: Colors.white,
          ),
          onPressed: () => functionBt1(),
          child: Text(
            titleBt1,
            style: Theme.of(context).textTheme.titleLarge,
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(right: 10.0),
          child: Container(
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.background,
              borderRadius: BorderRadius.circular(10),
              boxShadow: [
                BoxShadow(
                  color: Theme.of(context).colorScheme.shadow.withOpacity(0.3),
                  blurRadius: 3,
                  offset: const Offset(-1, -1),
                ),
                BoxShadow(
                  color: Theme.of(context).colorScheme.scrim.withOpacity(0.9),
                  blurRadius: 3,
                  offset: const Offset(2, 2),
                ),
              ],
            ),
            child: Material(
              borderRadius: BorderRadius.circular(10),
              color: Colors.transparent,
              child: InkWell(
                overlayColor: MaterialStateProperty.all<Color>(
                    Theme.of(context).colorScheme.background.withOpacity(0.8)),
                borderRadius: BorderRadius.circular(10),
                onTap: () => functionBt2(),
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      horizontal: 16.0, vertical: 10),
                  child: Text(
                    titleBt2,
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
